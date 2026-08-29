import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught some error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>ops</h2>
          <p>
            We have a error on this page{" "}
            <Link to="/"> Click here to go back to the home page</Link>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
ErrorBoundary.getDerivedStateFromError();

export default ErrorBoundary;
