import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Alert,
  Button,
} from "react-native";
import { Calendar } from "react-native-calendars";
import {
  getEvento,
  createEvento,
  updateEvento,
  deleteEvento,
} from "../../service/EventosService";
import { evento } from "../../types/types";

const HomeScreen = () => {
  const [eventos, setEventos] = useState<evento[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedEvento, setSelectedEvento] = useState<evento | null>(null);
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [imagem, setImagem] = useState("");
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [day, setDay] = useState("");

  // Fetch eventos ao carregar a tela
  const fetchEventos = async () => {
    try {
      const data = await getEvento();
      setEventos(data);
    } catch (error) {
      Alert.alert("Erro", "Erro ao buscar eventos.");
    }
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  const handleCreateEvento = async () => {
    // Validação dos campos obrigatórios
    if (!nome || !localizacao || !dataSelecionada || !imagem) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Criar o objeto com todos os campos necessários
      const novoEvento = {
        nome,
        localizacao,
        data: dataSelecionada, // Usar a data selecionada
        imagem,
      };

      // Chamada da função para criar o evento
      await createEvento(novoEvento);

      // Atualiza a lista de eventos e reseta os campos
      fetchEventos();
      setModalVisible(false);
      setNome("");
      setLocalizacao("");
      setImagem("");
      setDataSelecionada(""); // Reseta a data selecionada
    } catch (error) {
      Alert.alert("Erro", "Erro ao criar evento.");
    }
  };

  const handleDeleteEvento = async (id: number) => {
    // Confirmação antes de excluir o evento
    Alert.alert(
      "Excluir Evento",
      "Você tem certeza que deseja excluir este evento?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            try {
              // Chamada da função para deletar o evento
              await deleteEvento(id);
              // Atualiza a lista de eventos após a exclusão
              fetchEventos();
            } catch (error) {
              Alert.alert("Erro", "Erro ao excluir evento.");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Abrir modal para criação ou edição
  const openModal = (evento?: evento) => {
    if (evento) {
      setSelectedEvento(evento);
      setLocalizacao(evento.localizacao);
      setNome(evento.nome);
      setDataSelecionada(evento.data);
      setIsEditing(true);
    } else {
      setSelectedEvento(null);
      setLocalizacao("");
      setNome("");
      setDataSelecionada("");
      setIsEditing(false);
    }
    setModalVisible(true);
  };

  const onDayPress = (day: any) => {
    setDataSelecionada(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Eventos</Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventoContainer}>
            <Text style={styles.eventoText}>
              Localização: {item.localizacao}
            </Text>
            <Text style={styles.eventoText}>Data: {item.data}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => openModal(item)}
              >
                <Text style={styles.actionText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteEvento(item.id)}
              >
                <Text style={styles.actionText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.createButton} onPress={() => openModal()}>
        <Text style={styles.createButtonText}>Criar Evento</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Criar Novo Evento</Text>
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [dataSelecionada]: {
                selected: true,
                marked: true,
                selectedColor: "blue",
              },
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome do Evento"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Localização"
            value={localizacao}
            onChangeText={setLocalizacao}
          />
          <TextInput
            style={styles.input}
            placeholder="URL da Imagem"
            value={imagem}
            onChangeText={setImagem}
          />
          <Button
            title={isEditing ? "Atualizar Evento" : "Criar Evento"}
            onPress={handleCreateEvento}
          />
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    textAlign: "center",
  },
  eventoContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  eventoText: {
    fontSize: 16,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#F44336",
    padding: 10,
    borderRadius: 5,
  },
  actionText: {
    color: "#fff",
  },
  createButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  createButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
