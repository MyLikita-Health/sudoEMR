import React from 'react';
import { Col, Collapse } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import PreviousVisits from './PreviousVisits';
import { DoctorGuide } from '../Guides';
import Image from './Image';
import AssignedList from './AssignedList';
import LastDiagnosis from './LastDiagnosis';
import Diagnosis from './Diagnosis';
// import './doctor.css';
import { _fetchData, _postData, _convertArrOfObjToArr } from '../helpers';
import FaPaperPlane from 'react-icons/lib/fa/paper-plane-o';
import FaPrint from 'react-icons/lib/fa/print';
import Preview from './Preview';
import { error } from 'util';


/**
 * This is the first Doctors Module container
 * it contains all the components that is rendered in the
 * doctors module
 */

class PatienClarking extends React.Component {
    constructor(props) {
        super(props);
        let user = localStorage.getItem('username');
        //setting the initial state
        this.state = { 
            collapse: true,
            collapse2: true,
            patientrecords: [],
            fullDiagnosis: [],
            status: 'admission',
            id:'',
            records: [],
            seen_by: user,
            prescription: [],
            previewModal: false,
            presenting_complaints: [],
            history: [],
            system_examination: [],
            vital_signs: [],
            problems: [],
            lab_investigation: [],
            provisional_diagnosis: [],
            athropometry: [],
            management_plan: "",
            prescription_request: [],
            dressing_request: [],
            observation_request: "",
            currentRecord: {},
            error: ''
        };
    }

    /**
     * This method fetches all the data in the diagnosis table and 
     * save it directly into localstorage for further use
     */
    fetchDiagnosis(patientId){
        let route = `diagnosis/fullDiagnosis?q=${patientId}`;
        let cb = (data) => localStorage.setItem('fullDiagnosis', JSON.stringify(data));
        _fetchData({ route, success_callback: cb })
    }


    /**
     * This controls the collapse page for the patient diagnosis
     */
    toggle=(currentRecord)=>{
        // we fetch the diagnosis passing the patient id
        this.fetchDiagnosis(currentRecord.id);
        console.log(currentRecord);
        this.back();
        this.setState({ 
            currentRecord
        });

    }

    clearLocalStorage = () => {
        localStorage.removeItem('presenting_complaints');
        localStorage.removeItem('history');
        localStorage.removeItem('system_examination');
        localStorage.removeItem('vital_signs');
        localStorage.removeItem('problems');
        localStorage.removeItem('lab_investigation');
        localStorage.removeItem('provisional_diagnosis');
        localStorage.removeItem('athropometry');
        localStorage.removeItem('management_plan');
        localStorage.removeItem('prescription_request');
        localStorage.removeItem('dressing_request');
        localStorage.removeItem('observation_request');
        localStorage.removeItem('previous_medical_history');
    }

    //closes the collapse
    handleCancel=(e)=>{
        e.preventDefault();
        this.setState({collapse: true});
    }

    getPrescription = (p) => {
        const arr = _convertArrOfObjToArr(p);
        this.setState({ prescription: arr });
    }

    handleSubmit=(event)=>{ 
        event.preventDefault()
        let user = localStorage.getItem('username');
        if(!this.state.currentRecord.id) return window.alert('Hell no!')
        /**
         * We get all the data entered in each form in the diagnosis
         * section.
         */
        let presenting_complaints = JSON.parse(localStorage.getItem('presenting_complaints'));
        let history = JSON.parse(localStorage.getItem('history'));
        let system_examination = JSON.parse(localStorage.getItem('system_examination'));
        let vital_signs = JSON.parse(localStorage.getItem('vital_signs'));
        let problems = JSON.parse(localStorage.getItem('problems'));
        let lab_investigation = JSON.parse(localStorage.getItem('lab_investigation'));
        let provisional_diagnosis = JSON.parse(localStorage.getItem('provisional_diagnosis'));
        let athropometry = JSON.parse(localStorage.getItem('athropometry'));
        let management_plan = localStorage.getItem('management_plan');
        let prescription_request = JSON.parse(localStorage.getItem('prescription_request'));   
        let dressing_request = JSON.parse(localStorage.getItem('dressing_request'));
        let observation_request = localStorage.getItem('observation_request');
        let previous_medical_history = JSON.parse(localStorage.getItem('previous_medical_history'));
        

        // console.log( presenting_complaints, history, system_examination,
        //     vital_signs, problems, lab_investigation, provisional_diagnosis, athropometry, 
        //     management_plan, prescription_request, dressing_request, observation_request, 
        //     previous_medical_history)

        /**
         * We send this to the prescription request table
         * for the pharmarcy departement
         */

        // let req = this.state.prescription;
        if(prescription_request){
            this.saveDrugs(prescription_request, user);
        }

        //...and this goes to the radiological table for the laboratory dept.
        if(lab_investigation){
            this.saveLabInvestigation(lab_investigation, user);
        }

        let data = Object.assign({}, history, system_examination, vital_signs, problems, 
            provisional_diagnosis, athropometry, dressing_request, previous_medical_history, 
            { 
                management_plan, 
                observation_request, 
                date: new Date(), 
                id: this.state.id, 
                seen_by: user 
            }
        );

        //...and the rest go to the patient diagnosis table
        this.postData('diagnosis/clarking', data);
        // console.log(data);
        this.clearLocalStorage();
            
    }

    saveDrugs=(prescription_request, user)=>{
        for(let o of prescription_request){
            o.drugStatus = 'pending',
            o.date = new Date(),
            o.id = this.state.id,
            o.seen_by = user
        }
        let data = _convertArrOfObjToArr(prescription_request);
        let route = 'drugs/submitDrug'
        _postData({ route, data });
      
    }

    saveLabInvestigation=(lab_investigation, user)=>{
        for(let o of lab_investigation){
            o.date = new Date(),
            o.id = this.state.id,
            o.seen_by = user,
            o.test_status = 'pending'
        }
        let data = _convertArrOfObjToArr(lab_investigation);
        let route = 'lab/submitLab';

       _postData({ route, data });
    }

    /**
     * This is a helper function which helps to post data to 
     * the database depending on the value of the paramaters 
     * passed in
     * postData()
     * @params route - that takes the backend route we want to use
     * @params data - the information we want to submit
     */
    postData(route, data){
        let cb = () => console.log(data);
        _postData({ route, data, cb});
    }

    /**
     * This method make use of the helper function _fetchData
     * to fetch data.
     * fetchData()
     */
    fetchData(){        
        const username = localStorage.getItem('username');
        let route =  `patientrecords/doctor?q=${username}`;
        let success_callback = (data) => this.setState({ patientrecords: data })
        let error_callback = error => this.setState({error})
        _fetchData({ route, success_callback, error_callback })
    }

    /**
     * Immediately before the component is mounted, we get the 
     * patient's data that has been save to the localStorage to
     * render it without having to fetch from the database again.
     */
    // componentWillMount() {
    //     localStorage.getItem('patientrecords') && this.setState({
    //         patientrecords: JSON.parse(localStorage.getItem('patientrecords'))
    //     })
    // } 

    /**
     * Immediately after the component is mounted, we fetch the list
     * of patients currently assigned to the current doctor.
     */
    componentDidMount() {
        this.fetchData();   
    }

    /**
     * This happens when we want to update the component
     */
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('patientrecords', JSON.stringify(nextState.patientrecords));
    }

    /**
     * getFullDiagnosisByTransactionId()
     * @param transactionId
     * This method filters the fullDiagnosis list and returns the
     * record that contains the particular transactionId
     */
    getFullDiagnosisByTransactionId = (transactionId) => {
        const fullDiagnosis = JSON.parse(localStorage.getItem('fullDiagnosis'));
        const fullDiagnosisByTransactionId = fullDiagnosis.filter(diag => diag.transactionId === transactionId);
        this.setState({ records: fullDiagnosisByTransactionId[0] });
    }

    //to toggle with the back button
    back=()=> this.setState(prevState => ({ collapse: !prevState.collapse }))

    toggleCollapse2 = () => this.setState({ collapse2: false });

    onPreviewClick=()=>{ 
        this.getSavedData();
        this.setState(prevState => ({ 
            previewModal: !prevState.previewModal
        })) 
    }

    getSavedData=()=>{
        let presenting_complaints = JSON.parse(localStorage.getItem('presenting_complaints'));
        let history = JSON.parse(localStorage.getItem('history'));
        let system_examination = JSON.parse(localStorage.getItem('system_examination'));
        let vital_signs = JSON.parse(localStorage.getItem('vital_signs'));
        let problems = JSON.parse(localStorage.getItem('problems'));
        let lab_investigation = JSON.parse(localStorage.getItem('lab_investigation'));
        let provisional_diagnosis = JSON.parse(localStorage.getItem('provisional_diagnosis'));
        let athropometry = JSON.parse(localStorage.getItem('athropometry'));
        let management_plan = localStorage.getItem('management_plan');
        let prescription_request = JSON.parse(localStorage.getItem('prescription_request'));   
        let dressing_request = JSON.parse(localStorage.getItem('dressing_request'));
        let observation_request = localStorage.getItem('observation_request');
        let previous_medical_history = JSON.parse(localStorage.getItem('previous_medical_history'));
        this.setState({ presenting_complaints, history, system_examination, vital_signs, 
            problems, lab_investigation, provisional_diagnosis, athropometry, management_plan, 
            prescription_request, dressing_request, observation_request, previous_medical_history
        })
    }

    

    render(){
        
        let { collapse, patientrecords, fullDiagnosis, records, previewModal, presenting_complaints,
            vital_signs, problems, lab_investigation, provisional_diagnosis, athropometry, 
            management_plan, prescription_request, dressing_request, observation_request, 
            previous_medical_history, history, system_examination,error } = this.state;
        const { toggle, back, toggleCollapse2, onPreviewClick, getFullDiagnosisByTransactionId,
            collapse2, handleSubmit } = this;
        return(
            <div className="row patient-clarking">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3" >
                    {/* Doctor user guide component */}
                    <DoctorGuide /> 

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" >
                        <Collapse isOpen={collapse}>
                            {/* 
                                This component display the list of patients assigned to the current
                                doctor 
                            */}
                            <AssignedList toggle={toggle} error={error} patientrecords={patientrecords} />
                        </Collapse>
                    </div>

                    <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Collapse isOpen={!collapse}>
                            {/* 
                                This component consists of the previous visits record for 
                                the patient whose name was clicked upon.
                             */}
                            <PreviousVisits 
                                toggle={back}
                                toggleCollapse2={toggleCollapse2} 
                                currentRecord={this.state.currentRecord}
                                fullDiagnosis={fullDiagnosis}
                                getFullDiagnosisByTransactionId={getFullDiagnosisByTransactionId} 
                            />
                        </Collapse>
                    </div>
                    
                </div> 

                
                <div style={{ border:'1px solid #007bff' }} className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
                    <Diagnosis />
                    <hr />
                    <div>
                        <button 
                            className="btn btn-outline-primary offset-md-3 col-xs-6 col-sm-5 col-md-3 col-lg-3" 
                            onClick={onPreviewClick}>Preview & Print <FaPrint size={30} /></button>
                        <button 
                            className="btn btn-outline-danger col-xs-6 col-sm-5 col-md-3 col-lg-3" 
                            onClick={handleSubmit}
                        >Submit <FaPaperPlane size={30} /></button>
                    </div>
                    <Preview 
                        patientrecord={this.state.patientrecord}
                        modal={previewModal}
                        toggle={onPreviewClick}
                        presenting_complaints={presenting_complaints}
                        history={history}
                        system_examination={system_examination}
                        vital_signs={vital_signs}
                        problems={problems}
                        lab_investigation={lab_investigation}
                        provisional_diagnosis={provisional_diagnosis}
                        athropometry={athropometry}
                        management_plan={management_plan}
                        prescription_request={prescription_request}
                        dressing_request={dressing_request}
                        observation_request={observation_request}
                        previous_medical_history={previous_medical_history}
                        submit={handleSubmit}
                    />
                </div>
              

                <div className="col-sm-12 col-md-3 col-lg-3">
                 {/* 
                    LastDiagnosis renders the patients diagnosis details with
                    respect to the visit date clicked.
                 */}
                    <Collapse isOpen={!collapse2}>
                        <Image /> 
                    </Collapse>
                    <Collapse isOpen={collapse2}>
                        <LastDiagnosis records={records} />
                    </Collapse>
                </div>

            </div>
        );
    }
}
export default PatienClarking;