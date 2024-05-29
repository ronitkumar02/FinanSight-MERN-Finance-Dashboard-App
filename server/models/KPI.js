import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose)

const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        operationalExprenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        nonOperationalExprenses: {
            type:mongoose.Types.Currency,
            currency:"USD",
            get: (v) => v/100
        }
    },
    {toJSON: {getters:true}}
)

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        operationalExprenses: {
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        nonOperationalExprenses: {
            type:mongoose.Types.Currency,
            currency:"USD",
            get: (v) => v/100
        }
    },
    {toJSON: {getters:true}}
)

const KPISchema = new Schema(
    {
        totalProfile:{
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalRevenue:{
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalExpenses:{
            type:mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expensesByCategory:{
            type:Map,
            of:{
                type:mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v/100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema],
    },
    {timestamps: true, toJSON: {getters:true}}
);

const KPI = mongoose.model("KPI",KPISchema);

export default KPI;