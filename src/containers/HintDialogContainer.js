import { connect } from "react-redux";
import HintDialog from "../components/HintDialog";
import { pointPositionAction } from '../actions/studentActions';

const mapStateToProps = ({ JKs, playground }) => ({
  students: JKs.get('students')
});

const mapDispatchToProps = dispatch => ({
  pointPosition: payload => {
    dispatch(pointPositionAction(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HintDialog);