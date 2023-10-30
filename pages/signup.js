import React, {useState, useEffect, useRef} from "react";
import {Form, Button, Message, Segment, Divider} from "semantic-ui-react"
import {HeaderMessage, FooterMessage} from "../components/Common/WelcomeMessage";
import CommonInputs from "../components/Common/CommonInputs";
import ImageDropDiv from "../components/Common/ImageDropDiv";

export const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bio: "",
        facebook: "",
        youtube: "",
        twitter: "",
        instagram: ""
    });

    const {name, email, password, bio} = user;

    const [showSocialLinks, setShowSocialLinks] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [formLoading, setFormLoading] = useState(false);

    const [username, setUsername] = useState("");
    const [usernameLoading, setUsernameLoading] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState(false);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [media, setMedia] = useState(null);
    const [mediaPreview, setMediaPreview] = useState(null);
    const [highlighted, setHighlighted] = useState(false);

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if(name === "media"){
            setMedia(files[0]);
            setMediaPreview(URL.createObjectURL(files[0]));
        }
        setUser(prev => ({...prev, [name]: value}));
    }

    useEffect(() => {
        const isUser = Object.values({name, email, password, bio}).every(item => Boolean(item));
        isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
    },[])

    return(
        <>
            <HeaderMessage />
                <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
                    <Message error header={"Ooops"} content={errorMsg} onDismiss={()=> setErrorMsg(null)}/>
                    <Segment>
                        <ImageDropDiv
                            inputRef={inputRef}
                            highlighted={highlighted}
                            setHighlighted={setHighlighted}
                            handleChange={handleChange}
                            mediaPreview={mediaPreview}
                            setMediaPreview={setMediaPreview}
                            setMedia={setMedia}
                        />
                        <Form.Input
                            required={true}
                            label={"Name"}
                            placeholder={"Name"}
                            name={"name"}
                            value={name}
                            onChange={handleChange}
                            fluid
                            icon={"user"}
                            iconPosition={"left"}
                        />

                        <Form.Input
                            required={true}
                            label={"Email"}
                            placeholder={"Email"}
                            name={"email"}
                            value={email}
                            onChange={handleChange}
                            fluid
                            icon={"envelope"}
                            iconPosition={"left"}
                            type={"email"}
                        />

                        <Form.Input
                            label={"Password"}
                            placeholder={"Password"}
                            name={"password"}
                            value={password}
                            onChange={handleChange}
                            fluid
                            icon={{
                                name: "eye",
                                circular: true,
                                link: true,
                                onClick: () => setShowPassword(!showPassword)
                            }}
                            iconPosition={"left"}
                            type={showPassword ? "text" : "password"}
                            required={true}
                        />
                        <Form.Input
                            required={true}
                            label={"Username"}
                            placeholder={"Username"}
                            name={"username"}
                            value={username}
                            onChange={e=> {
                                setUsername(e.target.value);
                                if(regexUserName.test(e.target.value)){
                                    setUsernameAvailable(true);
                                }else{
                                    setUsernameAvailable(false);
                                }
                            }}
                            fluid
                            icon={usernameAvailable ? "check" : "close"}
                            iconPosition={"left"}
                        />
                        <CommonInputs
                            user={user}
                            showSocialLinks={showSocialLinks}
                            setShowSocialLinks={setShowSocialLinks}
                            handleChange={handleChange}
                        />
                        <Divider hidden />
                        <Button
                            icon={"signup"}
                            content={"Signup"}
                            type={"submit"}
                            color={"orange"}
                            disabled={submitDisabled || !usernameAvailable}
                        />
                    </Segment>
                </Form>
            <FooterMessage />
        </>
    )
}
export default Signup;