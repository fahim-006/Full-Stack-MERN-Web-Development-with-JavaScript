import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
import {baseUrl} from '../../redux/BaseUrl'

const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={baseUrl+props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price}/-
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading}></LoadComments>
                    <hr/>
                    <CommentForm dishId = {props.dish.id} addComment = {props.addComment}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;