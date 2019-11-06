import React from 'react';

const Style = {
    back: {
        backgroundColor: "#8F61B7",
        height: "100vh",
        width: "100%"
    },
    form: {
        button: {
            margin: "2rem",
            height: "2.25em",
            lineHeight: -5,
            backgroundColor: "#1b67bc",
            color: "#fff",
            border: "1px solid #1b67bc",
            borderRadius: 3,
            fontWeight: "bold",
            fontFamily: "Source Sans Pro, sans-serif"
        },
        input: {
            height: "2.2em",
            marginTop: "2rem",
            borderRadius: 3
        }
    }
}

export const Content = () => {
    return (
        <div className="content-dashbaord" style={Style.back}>
            <form>
                <div className="d-flex">
                    <button type="submit" style={Style.form.button}>Générer un code</button>
                    <input style={Style.form.input} type="text" name="generatorCode" id="generatorCode" />
                </div>
            </form>
        </div>
    );
}