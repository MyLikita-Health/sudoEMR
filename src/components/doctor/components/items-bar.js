import React from 'react';

const ItemsBar = () => {
    return (
        <div class="row">
          <div class="col-12 col-lg-8 ml-auto mr-auto mb-4">
            <div class="multisteps-form__progress">
              <button class="multisteps-form__progress-btn" type="button" title="User Info">History</button>
              <button class="multisteps-form__progress-btn js-active" type="button" title="Address">Examination</button>
              <button class="multisteps-form__progress-btn" type="button" title="Order Info">Diagnosis</button>
              <button class="multisteps-form__progress-btn" type="button" title="Comments">Management Plan</button>
            </div>
          </div>
        </div>
    )
}

const TestTab = () => (
    <div className="mother">
        <div className="motherwrapper">
            <div className="arrow-steps clfix">
                <div className="step js-active"> <span> Athropometry</span> </div>
                <div className="step"> <span>Dressing</span> </div>
                <div className="step"> <span> Observations</span> </div>
                <div className="step"> <span>Prescriptions</span> </div>
            </div>

        </div>
    </div>
)

export default ItemsBar;
// IN mda_name, varchar(255), IN fullname, varchar(255), IN DOB, varchar(255), IN staff_id_card_no, varchar(255), IN file_no, varchar(255), IN qualification, varchar(255), IN department, varchar(255), IN date_of_first_appointment, varchar(255), IN entry_level, varchar(255), IN date_of_confirmation, varchar(255), IN date_of_present_appointment, varchar(255), IN salary_grade_level, varchar(255), IN step, varchar(255), IN present_designation, varchar(255), IN bank_name, varchar(255), IN acc_no, varchar(255), IN bvn, varchar(255)