import React from "react";
import {Form, Segment, Image} from "semantic-ui-react";


const ImageDropDiv = ({
    highlighted,
    setHighlighted,
    inputRef,
    handleChange,
    mediaPreview,
    setMediaPreview,
    setMedia
}) => {
    return(
        <>
            <Form.Field>
                <Segment>
                    <input
                        ref={inputRef}
                        onChange={handleChange}
                        name={"media"}
                        accept={"image/*"}
                        type={"file"}
                        content={"Select Image"}
                        style={{display: "none"}}
                    />
                    <div
                        onDragOver={e => {
                            e.preventDefault();
                            setHighlighted(true);
                        }}
                        onDragLeave={e => {
                            e.preventDefault();
                            setHighlighted(false);
                        }}
                        onDrop={e => {
                            e.preventDefault();
                            setHighlighted(true);

                            const droppedFile = Array.from(e.dataTransfer.files);
                            setMedia(droppedFile[0]);
                            setMediaPreview(URL.createObjectURL(droppedFile[0]));
                        }}
                    >
                        {mediaPreview === null ? (
                            <>
                                <Segment color={highlighted ? "green" : ""} placeholder basic>
                                    <Image
                                        src={"/images/drop-image.png"}
                                        size={"medium"}
                                        centered
                                    />
                                </Segment>
                            </>
                        ) : (
                            <Segment color={"green"} placeholder basic>
                                <Image
                                    src={mediaPreview}
                                    size={"medium"}
                                    centered
                                    style={{cursor: "pointer"}}
                                />
                            </Segment>
                        )}
                    </div>
                </Segment>

            </Form.Field>
        </>
    )
};

export default ImageDropDiv;