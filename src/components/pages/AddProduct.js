

import {
    Button,
    Checkbox, Fab,
    FormControlLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
    styled,
} from "@mui/material";
// import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",

}));



const AddProductDetails = () => {
    const [state, setState] = useState({ date: new Date() });



    const handleSubmit = (event) => {
        console.log("submitted");
        // console.log(event);
    };

    const handleChange = (event) => {
        event.persist();
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const handleSelectedFile = (event) => {

        document.getElementById("fileInput").innerHTML='✓';
        document.getElementById("fileInput").style.color='#2edb8a';
    };

    const {
        ItemPic,
        lastName,
        firstName,
        mobile,
        description,
        email,
        serviceCharge,
        linkedinUrl,
        fbUrl,
        twitterUrl
    } = state;


    let imgDiv={
        width: "100%",
        marginBottom: "45px",
        display:"flex",
        justifyContent:"space-between",

    };
    let labelDiv={
        color:"#d82edb",
        fontWeight:"600",

    };
    let hideFile={

    };
    let iconDiv={
        color:"#82b9d1",
        cursor:"pointer",
        display:"block"
    };
    let iconDiv2={
        color:"#82b9d1",
        cursor:"pointer",
        display:"none"
    };

    return (
        <div style={{alignItems:"center"}}>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null} style={{minWidth:'100px'}}>
                <Grid container spacing={2} sx={{minWidth:100} }>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <div style={imgDiv}>

                            <small style={labelDiv} >Item Picture</small>

                            <Icon
                                id="fileInput"
                                variant="contained"
                                component="label"
                                style={iconDiv}
                            >
                                <div id={"test"}>

                                </div>
                                <div id="addItem" >
                                    <Icon  id={"img1"}><AddAPhotoIcon /></Icon>
                                </div>


                                <input

                                    type="file"
                                    onChange={handleSelectedFile}
                                    value={ItemPic|| ""}

                                />
                            </Icon>


                        </div>

                        <TextField
                            type="text"
                            name="Item_name"
                            label="Item Name"
                        />
                        <TextField
                            type= "number"
                            name="Item_Price"
                            label="Price"
                        />



                    </Grid>



                </Grid>

                <Button  color="primary" variant="contained" type="submit">
                    <Icon ><SendIcon style={{paddingBottom:"10px" }} /></Icon>
                    <div style={{marginLeft:"5px"}} sx={{ ml: 8, textTransform: "capitalize" }}>Add Item</div>

                </Button>
            </ValidatorForm>
        </div>
    );
};

export default AddProductDetails;
