import { companyList } from './company';

export interface SummaryUpload {
    company:companyList;
    record:number;
    stockExchange:string;
    startDate:Date;
    endDate:Date;

}