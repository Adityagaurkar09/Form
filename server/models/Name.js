import { model, Schema } from "mongoose";

const plateSchema = new Schema({
    Make: {
        type: String,
        required: true,
    },
     SR: {
        type: String,
        required: true
    },
    MVA: {
        type: String,
        required: true
    },
    HV: {
        type: String,
        default: Date.now
    },
    LV: {
        type: String,
        required: true
    },
    Impedance: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Oil: {
        type: String,
        required: true
    },
    CurrentHV: {
        type: String,
        required: true
    },
    CurrentLV: {
        type: String,
        required: true
    },
    TempRiseWinding: {
        type: String,
        required: true
    },
    TempRiseOil: {
        type: String,
        required: true
    },
    TransportWeight: {
        type: String,
        required: true
    },
    NoOfRadiators: {
        type: String,
        required: true
    },
    WeightCore: {
        type: String,
        required: true
    },
    TotalWeight: {
        type: String,
        required: true
    }
})

const Plate = model("Plate", plateSchema);
export default Plate;