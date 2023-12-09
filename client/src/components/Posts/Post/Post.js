import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost, deletePost } from "../..//actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
   const dispatch = useDispatch();
   const classes = useStyles();

   return (
     <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || } />
        <div className={classes.overlay}>
          <Typography>{post.creator}</Typography>
          <Typography>{}</Typography>
        </div>
        <div className={classes.overlay2}>

        </div>
        <div className={classes.details}>

        </div>
        <Typography className={classes.title}>{}</Typography>
        <CardContent>
            <Typography></Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
           <Button></Button>
           <Button></Button>
        </CardActions>
     </Card>
   );
};

export default Post;