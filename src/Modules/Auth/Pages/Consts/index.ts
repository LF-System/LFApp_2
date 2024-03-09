import yup from "../../../../Shared/Libraries/Yup/yupConfig";

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
