import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitulo: {
    fontSize: 18,
    color: "#DDD",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  errorText: {
    color: "#FF4444",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    width: "100%",
  },
  inputError: {
    borderColor: "#FF4444",
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  buttonDisabled: {
    backgroundColor: "#666666",
    opacity: 0.7,
  },
  registerText: {
    color: "#FFF",
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: "underline",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  errorContainer: {
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loadingText: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 10,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    alignSelf: "flex-start",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 4,
    marginRight: 8,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#FFF",
  },
  rememberText: {
    color: "#FFF",
    fontSize: 14,
  },
  registerContainer: {
    marginTop: 20,
  },
});
