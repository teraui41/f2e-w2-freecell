import { connect } from "react-redux";
import Playground from "../screens/PlaygroundScreen";

const mapStateToProps = ({ JKs }) => ({
  students: JKs.get('students').toJS()
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground);
