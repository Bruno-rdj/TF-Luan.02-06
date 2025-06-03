export default {
    "/api/documentos/upload": {
        "post": {
            "tags": ["Documentos"],
            "summary": "Upload de documento PDF",
            "description": "Realiza o upload de um arquivo PDF e associa ao usuário autenticado",
            "security": [
                {
                    "bearerAuth": []
                }
            ],
            "requestBody": {
                "content": {
                    "multipart/form-data": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "documento": {
                                    "type": "string",
                                    "format": "binary",
                                    "description": "Arquivo PDF a ser enviado"
                                }
                            },
                            "required": ["documento"]
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Documento enviado com sucesso",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "mensagem": {
                                        "type": "string",
                                        "example": "Documento enviado com sucesso!"
                                    },
                                    "documento": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "type": "integer",
                                                "example": 1
                                            },
                                            "nome": {
                                                "type": "string",
                                                "example": "1623456789_documento.pdf"
                                            },
                                            "usuario": {
                                                "type": "string",
                                                "example": "João Silva"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Requisição inválida",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "type": "string",
                                        "example": "Arquivo não enviado"
                                    }
                                }
                            }
                        }
                    }
                },
                "401": {
                    "description": "Não autorizado",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "type": "string",
                                        "example": "Token não fornecido"
                                    }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Usuário não encontrado",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "type": "string",
                                        "example": "Usuário não encontrado"
                                    }
                                }
                            }
                        }
                    }
                },
                "500": {
                    "description": "Erro interno do servidor",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "type": "string",
                                        "example": "Erro ao salvar arquivo"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};