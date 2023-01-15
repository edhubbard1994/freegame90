import nodeCallsPy from "node-calls-python"
const python = nodeCallsPy.interpreter

export enum PropertyType {
    Residence,
    Investment,
    HouseHack
}

export type DataPoint = {
    date: Date,
    name: string
    value: Number
}

export type Property = {
    type: PropertyType,
    purchaseDate: Date
    sellDate?: Date
    units: Number
    purchasePrice: Number,
    downPayment: Number,
    rentalIncome: Number,
    operatingCosts: Number,
}

export type Calculations = {
    numberOfYears: Number
    calculations: Array<DataPoint>

}

export type DataInput = {
    properties: Array<Property>,
    numberOfYears: Number
}



export const calculateData = (data: DataInput): Calculations => {
    let result;
    python.import("./src/calculator/model.py").then(async function(pymodule: any) {
        result = python.callSync(pymodule, "run_model", data);
        console.log(result);

    })
    return {numberOfYears: 5, calculations: []}

}