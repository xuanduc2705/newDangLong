export const REGEX = {
    number: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^0[1-9]{1}[0-9]{8,9}$/,
    code: /^[a-zA-Z0-9_]{1,50}$/,
    decimalRegex: /^[0-9.]+$/,
    password: /^.{6,}$/,
    C_BIRTHDAY: /^[12]{1}[0-9]{3}-(0?[1-9]|1[0-2]{1})-(0?[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})$/,
    C_DATE_TIME:
        /^[2]{1}[0]{1}[0-9]{2}-(0?[1-9]|1[0-2]{1})-(0?[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1}) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]$/,
    C_EXCEL_DATE: /^(0?[1-9]{1}|[1-2]{1}[0-9]{1}|3[0-1]{1})[-/]{1}(0?[1-9]|1[0-2]{1})[-/]{1}[12]{1}[0-9]{3}$/,
    SO_NGUYEN_DUONG: /^[1-9][\d]*$/,
    F_EXCEL: /^application\/vnd.openxmlformats-officedocument.spreadsheetml.sheet$/,
    F_IMG: /^image\/png|image\/jpeg|image\/jpg|image\/gif$/,
    VEHICLE: /^[a-zA-Z0-9-]{1,13}$/,
}
