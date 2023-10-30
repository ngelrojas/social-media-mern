import React from "react";
import {Form, Button, Message, Segment, TextArea, Divider} from "semantic-ui-react"

export const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const CommonInputs = ({user: {bio, facebook, instagram, youtube, twitter},
                      handleChange,
                      showSocialLinks,
                      setShowSocialLinks
}) => {

    return(
        <>
            <Form.Field required control={TextArea} name={"bio"} defaultValue={bio} />
            <Button
                content={"Add Social Links"}
                color={"red"}
                icon={"at"}
                type={"button"}
                onClick={()=> setShowSocialLinks(!showSocialLinks)} />

                {showSocialLinks && (
                    <>
                        <Divider />
                        <Form.Input>
                            icon={"facebook f"}
                            iconPosition={"left"}
                            name={"facebook"}
                            value={facebook}
                            onChange={handleChange}
                        </Form.Input>
                        <Form.Input>
                            icon={"twitter"}
                            iconPosition={"left"}
                            name={"twitter"}
                            value={twitter}
                            onChange={handleChange}
                        </Form.Input>

                        <Form.Input>
                            icon={"instagram"}
                            iconPosition={"left"}
                            name={"instagram"}
                            value={instagram}
                            onChange={handleChange}
                        </Form.Input>
                        <Form.Input>
                            icon={"youtube"}
                            iconPosition={"left"}
                            name={"youtube"}
                            value={youtube}
                            onChange={handleChange}
                        </Form.Input>

                        <Message
                            icon={"attention"}
                            info
                            size={"small"}
                            header={"Social Media Links Are Optional! "}
                        />
                    </>
                )}
        </>
    )
}

export default CommonInputs;
