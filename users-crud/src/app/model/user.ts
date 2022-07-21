import { Address } from "./address"
import { InsuranceCompany } from "./insurance-company";
import { TypeOfProfessional } from "./type-of-professional";

export class User {
    id: number;
    name: string;
    surname: string;
    secondSurname: string;
    gender: string;
    dateOfBirth: Date;
    address: Address;
    nif: string;
    patientData: {
        medicalHistoryNumber: string;
        insuranceCompanies: InsuranceCompany[];
        nhc: string;
    };
    professionalData: {
        type: TypeOfProfessional;
        collegeNumber: number;
    };
}
