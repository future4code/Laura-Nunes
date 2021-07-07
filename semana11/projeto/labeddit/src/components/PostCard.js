import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import CommentIcon from "@material-ui/icons/Comment";
import { useHistory } from "react-router-dom";

const PostCard = (props) => {
  const history = useHistory();

  const handleGoToPostDetail = () => {
    history.push(`/post/${props.post.id}/`);
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.title}
        subheader={props.post.username}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <ArrowUpwardIcon />
        </IconButton>
        <p>{props.post.voteSum}</p>
        <IconButton>
          <ArrowDownwardIcon />
        </IconButton>
          <Button
            onClick={handleGoToPostDetail}
            variant="contained"
            color="default"
            startIcon={<CommentIcon />}
          >
            Comentar
          </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
