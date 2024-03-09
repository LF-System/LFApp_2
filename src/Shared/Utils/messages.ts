import Swal from "sweetalert2";

enum SwalIcon {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  QUESTION = "question",
}

const showMessage = (icon: SwalIcon, text: string, title: string) => {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
};

const showSuccess = (text: string, title: string = "Sucesso") => {
  Swal.fire({
    icon: SwalIcon.SUCCESS,
    title: title,
    text: text,
  });
};

const showError = (text: string, title: string = "Oops...") => {
  Swal.fire({
    icon: SwalIcon.ERROR,
    title: title,
    text: text,
  });
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });
};

const showErrorLikeToast = (text: string, title: string = "Oops...") => {
  Swal.fire({
    icon: "error",
    title: title,
    text: text,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
  });
};

const showWarning = (text: string, title: string = "Atenção") => {
  Swal.fire({
    icon: SwalIcon.WARNING,
    title: title,
    text: text,
  });
};

const showWarningLikeToast = (text: string, title: string = "Atenção") => {
  Swal.fire({
    icon: SwalIcon.WARNING,
    title: title,
    text: text,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000, // Tempo em milissegundos para o toast desaparecer
    timerProgressBar: true, // Mostra uma barra de progresso no tempo restante
  });
};

const showInfo = (text: string, title: string = "Informação") => {
  Swal.fire({
    icon: SwalIcon.INFO,
    title: title,
    text: text,
  });
};

const formatErrorValidation = (errors: any) => {
  const formatErrors = Object.values(errors);
  return formatErrors.flat().toString().split(",").join("<br />");
};

export const messages = {
  formatErrorValidation,
  showInfo,
  showWarning,
  showWarningLikeToast,
  showError,
  showErrorLikeToast,
  showSuccess,
  showMessage,
};
