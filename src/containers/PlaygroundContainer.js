import { connect } from "react-redux";
import Playground from "../screens/PlaygroundScreen";
import { pointPositionAction, selectStudentAction } from '../actions/studentActions';

const mapStateToProps = ({ JKs, playground }) => ({
  students: JKs.get('students').toJS(),
  selectedId: playground.get('selectedId')
});

const mapDispatchToProps = dispatch => ({
  pointPosition: payload => {
    dispatch(pointPositionAction(payload));
  },
  selectStudent: payload => {
    dispatch(selectStudentAction(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground);
