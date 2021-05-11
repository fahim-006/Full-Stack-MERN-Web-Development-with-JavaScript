import React, { useState } from 'react';
import InputPlace from '../InputPlace/InputPlace';
import PickImage from '../PickImage/PickImage';
import { addPlace } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';

const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place))
    }
}


const SharePlaces = props => {
    const [inputValue, setInputValue] = useState("");
    const [image, setImage] = useState("");
    const [base64, setBase64] = useState("");

    const handleAddingPlace = () => {
        if (inputValue === "" || image === "") {
            if (image === "") {
                alert("Pick an Image")
            }
        } else {
            props.addPlace({
                key: Math.random().toString(),
                value: inputValue,
                image: image,
                base64: base64
            });
            setInputValue("");
            setImage("");
            props.navigation.navigate('Find Places');
        }
    }
    return (
        <View>
            <PickImage image={image} setImage={setImage} setBase64={setBase64} />
            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <View style={{
                alignItems: "center"
            }}>
                <Button
                    title="Add Place"
                    onPress={() => {
                        handleAddingPlace();
                    }}
                />
            </View>
        </View>

    );
}

export default connect(null, mapDispatchToProps)(SharePlaces);