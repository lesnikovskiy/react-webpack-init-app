import React, { useState } from "react";
import Input from "../presentation/Input";

const FormContainer = props => {
    const [formValues, setFormValues] = useState({
        seo_title: ""
    });

    const handleChange = (event) => {
        setFormValues({ [event.target.id]: event.target.value })
    }

    const { seo_title } = formValues;

    return (
        <form id="article-form">
            <Input
                text="SEO title"
                label="seo_title"
                type="text"
                id="seo_title"
                value={seo_title}
                handleChange={handleChange}
            />
        </form>
    );
}

export default FormContainer;
