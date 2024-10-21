import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettre à jour l'état pour afficher l'UI de secours
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Enregistrement d'une erreur dans la console
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    // Comme il n'y a pas de back-end, on se contente d'un log dans la console.
  }

  render() {
    if (this.state.hasError) {
      // Affichage d'un message d'erreur générique
      return <h1>Oops! Something went wrong. Please refresh the page.</h1>;
    }

    return this.props.children; // Rendu des enfants si tout va bien
  }
}

export default ErrorBoundary;
