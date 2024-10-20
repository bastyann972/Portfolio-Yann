import React, { useEffect, useRef } from "react";

const Modal = React.memo(({ onClose, title, description, image, url }) => {
  const closeButtonRef = useRef(null);

  // Mettre le focus sur le bouton "Fermer" lorsque le modal est ouvert
  useEffect(() => {
    closeButtonRef.current.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-lg w-full transform transition-transform duration-300 scale-100">
        <h3
          id="modal-title"
          className="text-xl font-bold mb-4 text-gray-800 dark:text-white"
        >
          {title}
        </h3>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p
          id="modal-description"
          className="text-gray-600 dark:text-gray-300 mb-4"
        >
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 mb-4"
        >
          Voir le projet
        </a>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="block w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
          aria-label="Fermer le modal"
        >
          Fermer
        </button>
      </div>
    </div>
  );
});

export default Modal;
