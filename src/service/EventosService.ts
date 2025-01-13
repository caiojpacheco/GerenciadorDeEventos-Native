import { evento } from "../types/types";
import api from "./api";

export const getEvento = async (): Promise<evento[]> => {
  const { data } = await api.get<evento[]>("/Eventos");
  return data;
};
export const createEvento = async (
  novoEvento: Omit<evento, "id">
): Promise<evento> => {
  const { data } = await api.post<evento>("/Eventos", novoEvento);
  return data;
};

export const deleteEvento = async (id: number): Promise<evento> => {
  const { data } = await api.delete<evento>("/Eventos/" + id);
  return data;
};

export const updateEvento = async (
  id: number,
  eventoEditado: evento
): Promise<evento> => {
  const { data } = await api.put<evento>("/Eventos/" + id, eventoEditado);
  return data;
};
