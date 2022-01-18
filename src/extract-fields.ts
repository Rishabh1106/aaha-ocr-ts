var _ = require('lodash')

export const extractAadharNo = (text:string) => {
    const aadharNo = text.match(/(\d+){4}\s(\d+){4}\s(\d+){4}/);
    return aadharNo[0];
}

export const extractPanNo = (text:string) => {
    const panNo = text.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/);
    return panNo[0];
}

export const extractDOB = (text:string) => {
    const dob = text.match(/(\d){2}\/(\d{2})\/(\d{4})/);
    return dob[0];
}

export const extractAadharName = (text:string) => {
    const names = text.match(/([A-Z])([a-z])+/g)
    _.remove(names, function (n:string) { return n === "Government" || n === "India" || n === "Date" || n === "Birth" || n === "Male" || n === "Female"; });
    return _.join(names, ' ');
}

export const extractGender = (text:string) => {
    const gender = text.match(/(MALE|FEMALE|Male|Female)/)
    return gender[0];
}

