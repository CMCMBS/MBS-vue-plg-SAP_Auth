module.exports = {
    prompts: {
        SAP_User: {
            type: "string",
            required: true,
            message: "SAP-User-Name"
        },
        SAP_Password: {
            type: "string",
            required: true,
            message: "SAP-User-Passwort"
        }
    },
    completeMessage: "Fertig"
}