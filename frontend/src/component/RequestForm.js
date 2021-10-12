import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../node_modules/kth-style/dist/css/kth-bootstrap.css'
import '../style/RequestForm.css'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const DatePickerField = ({ name, value, onChange }) => {
    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
    );
};

const submitForm = (jsonbody) => {
    fetch('http://localhost:8080/api/requestForm/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonbody,
    })
        .then((res) => res.json())
        .then((result) =>  console.log(result))
        .catch((err) => console.log('error'))
};

const RequestForm = () => (
    <div className="requester">
        <div className="container">
            <h1>Data export request</h1>
            <p>Follow the form below and choose the parameters according to what you need and click Submit. The data will be then be vetted and cleaned before a final approval, the file will then be provided to you.</p>
            <Formik
                initialValues={{
                    testbedLiL: [],
                    testbedEM: [],
                    testbedAH: [],
                    dataFreq: [],
                    startDate: "",
                    endDate: "",
                    title: "",
                    desc: "",

                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    submitForm(JSON.stringify(values, null, 2));
                    document.getElementById("alert-submit").style.display = "block";
                    document.getElementById("submitButton").style.display = "none";
                    //alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values ,setFieldValue}) => (
                    <Form>
                        <div className="form-group">

                            <div className="react-datepicker-wrapper form-group">
                                <div className="react-datepicker__input-container">
                                    <label className="form-control-label" htmlFor="startDate">Start date</label>
                                    <DatePickerField
                                        name="startDate"
                                        value={values.startDate}
                                        onChange={setFieldValue}
                                    />
                                </div>
                            </div>
                            <div className="react-datepicker-wrapper form-group">
                                <div className="react-datepicker__input-container">
                                    <label className="form-control-label" htmlFor="endDate">End date</label>
                                    <DatePickerField
                                        name="endDate"
                                        value={values.endDate}
                                        onChange={setFieldValue}
                                    />
                                </div>
                            </div>
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Testbed LiL
                            </label>
                            <div className="testBedBox">
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="Temperature" class="form-check-input" id="temp1"/>
                                    <label className="form-control-label" htmlFor="temp1">
                                        Temperature
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="Water" class="form-check-input" id="water1"/>
                                    <label className="form-control-label" htmlFor="water1">
                                        Water
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="CO2" class="form-check-input" id="co2_1"/>
                                    <label className="form-control-label" htmlFor="co2_1">
                                        CO2 Levels
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="Electricity" class="form-check-input" id="elec1" />
                                    <label className="form-control-label" htmlFor="elec1">
                                        Electricity
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="Pressure" class="form-check-input" id="pressure1" />
                                    <label className="form-control-label" htmlFor="pressure1">
                                        Pressure
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="Humidity" class="form-check-input" id="humidity1" />
                                    <label className="form-control-label" htmlFor="humidity1">
                                        Humidity
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedLiL" value="Luminosity" class="form-check-input" id="luminsoity1" />
                                    <label className="form-control-label" htmlFor="luminsoity1">
                                        Luminosity
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Testbed EM
                            </label>
                            <div className="testBedBox">
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedEM" value="Temperature" class="form-check-input" id="temp2"/>
                                    <label className="form-control-label" htmlFor="temp2">
                                        Temperature
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedEM" value="Warm Water" class="form-check-input" id="warmwater2"/>
                                    <label className="form-control-label" htmlFor="warmwater2">
                                        Warm Water
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedEM" value="Electricity" class="form-check-input" id="elec2" />
                                    <label className="form-control-label" htmlFor="elec2">
                                        Electricity
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedEM" value="CO2" class="form-check-input" id="co2_2"/>
                                    <label className="form-control-label" htmlFor="co2_2">
                                        CO2
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Testbed AH
                            </label>
                            <div className="testBedBox">
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedAH" value="District Warming" class="form-check-input" id="warming3"/>
                                    <label className="form-control-label" htmlFor="warming3">
                                        District Warming
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedAH" value="District Cooling" class="form-check-input" id="cooling3"/>
                                    <label className="form-control-label" htmlFor="cooling3">
                                        District Cooling
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedAH" value="Cold Water" class="form-check-input" id="coldwater3"/>
                                    <label className="form-control-label" htmlFor="coldwater3">
                                        Cold Water
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="testbedAH" value="Electricity" class="form-check-input" id="elec3" />
                                    <label className="form-control-label" htmlFor="elec3">
                                        Electricity
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Data frequency requested
                            </label>
                            <div className="testBedBox">
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="dataFreq" value="Hourly" class="form-check-input" id="hourly1"/>
                                    <label className="form-control-label" htmlFor="hourly1">
                                        Hourly
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="dataFreq" value="Daily" class="form-check-input" id="daily1"/>
                                    <label className="form-control-label" htmlFor="daily1">
                                        Daily
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="dataFreq" value="Weekly" class="form-check-input" id="weekly1"/>
                                    <label className="form-control-label" htmlFor="weekly1">
                                        Weekly
                                    </label>
                                </div>
                                <div className="form-check form-group">
                                    <Field type="checkbox" name="dataFreq" value="Monthly" class="form-check-input" id="month1" />
                                    <label className="form-control-label" htmlFor="month1">
                                        Monthly
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-text form-group">
                                <label className="form-control-label" htmlFor="title">Project title</label>
                                <Field
                                    id="title"
                                    name="title"
                                    placeholder="Project title..."
                                    type="text"
                                />
                            </div>
                            <div className="form-text form-group">
                                <label className="form-control-label" htmlFor="desc">Project description</label>
                                <Field
                                    id="desc"
                                    name="desc"
                                    placeholder="Project description..."
                                    type="text"
                                />
                            </div>
                            <div id="submitButton">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                            <div id="alert-submit" className="alert-submit">
                                <div id="successDiv" className="alert alert-success" role="alert">
                                    Submitted successfully!
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="separator gray" />
        </div>

    </div>
    )
export default RequestForm