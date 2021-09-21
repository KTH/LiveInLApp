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
const RequestForm = () => (
    <div className="requester">
        <div className="container">
            <br/>
            <Formik
                initialValues={{
                    testbedLiL: [],
                    testbedEM: [],
                    testbedAH: [],
                    dataFreq: [],
                    fromDate: "",
                    untilDate: "",
                    title: "",
                    desc: "",

                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values ,setFieldValue}) => (
                    <Form>
                        <div className="react-datepicker-wrapper">
                            <div className="react-datepicker__input-container">
                                <label htmlFor="fromDate">Start date</label>
                                <DatePickerField
                                    name="fromDate"
                                    value={values.fromDate}
                                    onChange={setFieldValue}
                                />
                            </div>
                        </div>
                        <div className="react-datepicker-wrapper">
                            <div className="react-datepicker__input-container">
                                <label htmlFor="untilDate">End date</label>
                                <DatePickerField
                                    name="untilDate"
                                    value={values.untilDate}
                                    onChange={setFieldValue}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Testbed LiL
                            </label>
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
                <br/> <br/>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Testbed EM
                            </label>
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
                <br/> <br/>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Testbed AH
                            </label>
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
                        <br/><br/>
                        <div className="form-group">
                            <label className="form-control-label" htmlFor="exampleFormControlCheckboxes">
                                Data frequency requested
                            </label>
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
                        <br/><br/>
                        <label htmlFor="title">Project title</label>
                        <Field
                            id="title"
                            name="title"
                            placeholder="Project title..."
                            type="text"
                        />
                        <br/><br/>
                        <label htmlFor="desc">Project description</label>
                        <Field
                            id="desc"
                            name="desc"
                            placeholder="Project description..."
                            type="text"
                        />
                        <br/><br/>
                        <button type="submit" className="btn btn-success">Submit</button>
                        <br/><br/>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
    )
export default RequestForm