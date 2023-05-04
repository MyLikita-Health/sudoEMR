import PouchDB from 'pouchdb-browser';
import Find from 'pouchdb-find';
// import { ipAddr } from '../redux/actions';

PouchDB.plugin(Find);


export const assign_db = new PouchDB('assign_db');

export const lab_db = new PouchDB('lab_db');


export const lab_services_db = new PouchDB('lab_services_db');


