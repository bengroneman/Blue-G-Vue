export default {
    fields: [{
        type: "input",
        inputType: "text",
        label: "Name:,
        model: "name",
        placeholder: "Your Name",
        featured: true,
        required: true
    }, {
        type: "input",
        inputType: "email",
        label: "Email Address",
        model: "email",
        require: true,
        placeholder: "User's email address"
    }, {
        type: "input",
        inputType: "comment",
        inputType: "text",
        label: "Comment"
        model: "comment",
        placeholder: "Content Body"
    }],
};
