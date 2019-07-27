import { connect } from "react-redux";
import HintDialog from "../components/HintDialog";
import { pointPositionAction } from "../actions/studentActions";
import {
  updateTeacherMessageAction,
  updateStudentMessageAction
} from "../actions/playgroundActions";

const mapStateToProps = ({ JKs, playground }) => ({
  students: JKs.get("students")
});

const mapDispatchToProps = dispatch => ({
  pointPosition: payload => {
    dispatch(pointPositionAction(payload));
  },
  updateTeacherMessage: payload => {
    dispatch(updateTeacherMessageAction(payload));
  },
  updateStudentMessage: payload => {
    dispatch(updateStudentMessageAction(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HintDialog);
