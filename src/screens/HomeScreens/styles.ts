import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = (width - 48) / 2; // 48 accounts for padding and gap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  logoutButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    width: itemWidth,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    padding: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageEvent: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleEvent: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1C1C1E",
  },
  evento: {
    fontSize: 14,
    color: "#636366",
    marginBottom: 2,
  },
  principal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
  },
  modalImagem: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  modalNome: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
    color: "#1C1C1E",
    textAlign: "center",
  },
  modalInput: {
    backgroundColor: "#F2F2F7",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#1C1C1E",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  button: {
    flex: 1,
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
  },
  cancelButton: {
    backgroundColor: "#8E8E93",
  },
  horizontalFlatList: {
    marginBottom: 20,
  },
  horizontalContentContainer: {
    paddingHorizontal: 16,
  },
  horizontalItemContainer: {
    width: width * 0.7,
    marginRight: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1C1C1E",
  },
  listHeader: {
    marginBottom: 16,
  },
});

export default styles;
