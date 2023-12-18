import React, { useState } from "react";
export const Modal = ({ close, onSubmit, defaultValue }) => {
    const [formState, setformState] = useState(defaultValue || {
        name: "",
        collegename: "",
        department: "bca",
    });
    const [errors, setError] = useState("")
    const validateForm = () => {
        if (formState.name && formState.collegename && formState.department) {
            setError("")
            return true;
        }
        else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key)
                }
            }
            setError(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setformState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState);
        close();
    }
    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") close();
        }}>
            <div className="modal">
                <form>
                    <div className="form-grp">
                        <label htmlFor="name">Name</label>
                        <input name="name" value={formState.name} onChange={handleChange} />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="collegename">Collegename</label>
                        <textarea name="collegename" value={formState.collegename} onChange={handleChange} />
                    </div>
                    <div className="form-grp">
                        <label htmlFor="department">Department</label>
                        <select name="department" value={formState.department} onChange={handleChange}>
                            <option value="bca">BCA</option>
                            <option value="bcs">BCS</option>
                            <option value="bcom">BCOM</option>
                        </select>
                    </div>
                    {errors && <div className="error"> {`please include:${errors}`}</div>}
                    <button type="submit" className="submitbtn" onClick={handleSubmit}>Submit
                    </button>
                </form>
            </div>
        </div>
    );
}