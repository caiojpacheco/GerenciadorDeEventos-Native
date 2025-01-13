import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
    marginBottom: 20,
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
  inputError: {
    borderColor: "#FF4444",
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  errorText: {
    color: "#FF4444",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "grey",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#666666",
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 20,
    padding: 10,
  },
  loginText: {
    color: "#FFF",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default styles;
