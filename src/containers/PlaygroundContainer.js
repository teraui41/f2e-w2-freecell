import { connect } from "react-redux";
import Playground from "../screens/PlaygroundScreen";
import {
  pointPositionAction,
  selectStudentAction
} from "../actions/studentActions";
import {
  pickStudentAction
} from '../actions/playgroundActions';

const mapStateToProps = ({ JKs, playground }) => ({
  students: JKs.get("students").toJS(),
  selectedId: playground.get("selectedId"),
  teacherMessage: playground.get("teacherMessage"),
  studentMessage: playground.get("studentMessage")
});

const mapDispatchToProps = dispatch => ({
  pointPosition: payload => {
    dispatch(pointPositionAction(payload));
  },
  selectStudent: payload => {
    dispatch(selectStudentAction(payload));
  },
  pickStudent: payload => {
    dispatch(pickStudentAction(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground);
