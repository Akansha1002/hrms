export type Employee = {
    employee_name: string
    status: string
    designation: string
    id: string
    workflow_state: string;
    name: string;
    employee_number: string
    login_id: string
    salutation: string
    first_name: string
    middle_name: string 
    last_name: string
    date_of_birth: string
    gender: string
    owner: string;
    creation: string;
    modified: string;
    modified_by: string;
    docstatus: number;
    idx: number;
    employee: string;
    naming_series: string;
    date_of_joining: string;
    image: string | null;
    user_id: string;
    create_user_permission: number;
    company: string;
    department: string;
    employment_type: string | null;
    reports_to: string | null;
    branch: string | null;
    grade: string | null;
    job_applicant: string | null;
    scheduled_confirmation_date: string | null;
    final_confirmation_date: string | null;
    contract_end_date: string | null;
    notice_number_of_days: number;
    date_of_retirement: string;
    cell_number: string | null;
    personal_email: string;
    company_email: string | null;
    prefered_contact_email: string;
    prefered_email: string;
    unsubscribed: number;
    current_address: string | null;
    current_accommodation_type: string;
    permanent_address: string | null;
    permanent_accommodation_type: string;
    person_to_be_contacted: string | null;
    emergency_phone_number: string | null;
    relation: string | null;
    attendance_device_id: string | null;
    holiday_list: string | null;
    default_shift: string | null;
    expense_approver: string | null;
    leave_approver: string | null;
    shift_request_approver: string | null;
    ctc: number;
    salary_currency: string;
    salary_mode: string;
    payroll_cost_center: string | null;
    pan_number: string | null;
    provident_fund_account: string | null;
    bank_name: string | null;
    bank_ac_no: string | null;
    ifsc_code: string | null;
    micr_code: string | null;
    iban: string | null;
    marital_status: string;
    family_background: string | null;
    blood_group: string;
    health_details: string | null;
    health_insurance_provider: string | null;
    health_insurance_no: string | null;
    passport_number: string | null;
    valid_upto: string | null;
    date_of_issue: string | null;
    place_of_issue: string | null;
    bio: string | null;
    resignation_letter_date: string | null;
    relieving_date: string | null;
    held_on: string | null;
    new_workplace: string | null;
    leave_encashed: string;
    encashment_date: string | null;
    reason_for_leaving: string | null;
    feedback: string | null;
    lft: number;
    rgt: number;
    old_parent: string;
}

export type GetEmployeesListResponse = {
    data: Employee
    total: number
}

export type EmployeeData = {
    name: string;
    owner: string;
    creation: string;
    modified: string;
    modified_by: string;
    docstatus: number;
    idx: number;
    workflow_state: string;
    employee: string;
    naming_series: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    employee_name: string;
    gender: string;
    date_of_birth: string;
    salutation: string;
    date_of_joining: string;
    image: string | null;
    status: string;
    user_id: string;
    create_user_permission: number;
    company: string;
    department: string;
    employment_type: string | null;
    employee_number: string | null;
    designation: string;
    reports_to: string | null;
    branch: string | null;
    grade: string | null;
    job_applicant: string | null;
    scheduled_confirmation_date: string | null;
    final_confirmation_date: string | null;
    contract_end_date: string | null;
    notice_number_of_days: number;
    date_of_retirement: string;
    cell_number: string | null;
    personal_email: string;
    company_email: string | null;
    prefered_contact_email: string;
    prefered_email: string;
    unsubscribed: number;
    current_address: string | null;
    current_accommodation_type: string;
    permanent_address: string | null;
    permanent_accommodation_type: string;
    person_to_be_contacted: string | null;
    emergency_phone_number: string | null;
    relation: string | null;
    attendance_device_id: string | null;
    holiday_list: string | null;
    default_shift: string | null;
    expense_approver: string | null;
    leave_approver: string | null;
    shift_request_approver: string | null;
    ctc: number;
    salary_currency: string;
    salary_mode: string;
    payroll_cost_center: string | null;
    pan_number: string | null;
    provident_fund_account: string | null;
    bank_name: string | null;
    bank_ac_no: string | null;
    ifsc_code: string | null;
    micr_code: string | null;
    iban: string | null;
    marital_status: string;
    family_background: string | null;
    blood_group: string;
    health_details: string | null;
    health_insurance_provider: string | null;
    health_insurance_no: string | null;
    passport_number: string | null;
    valid_upto: string | null;
    date_of_issue: string | null;
    place_of_issue: string | null;
    bio: string | null;
    resignation_letter_date: string | null;
    relieving_date: string | null;
    held_on: string | null;
    new_workplace: string | null;
    leave_encashed: string;
    encashment_date: string | null;
    reason_for_leaving: string | null;
    feedback: string | null;
    lft: number;
    rgt: number;
    old_parent: string;
};
