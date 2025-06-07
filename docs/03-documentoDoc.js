export default {
    "/api/documentos/upload": {
        "post": {
            "summary": "Upload de documento PDF",
            "description": "Realiza o upload de um documento PDF e o associa ao usuário autenticado.",
            "tags": ["Documentos"],
            "requestBody": {
                "required": true,
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
                                        "example": "Documento PDF enviado com sucesso!"
                                    },
                                    "documento": {
                                        "type": "object",
                                        "properties": {
                                            "id": {
                                                "type": "integer",
                                                "description": "ID do documento no banco de dados"
                                            },
                                            "nome": {
                                                "type": "string",
                                                "description": "Nome do arquivo salvo"
                                            },
                                            "usuario_id": {
                                                "type": "integer",
                                                "description": "ID do usuário que enviou o documento"
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
                "500": {
                    "description": "Erro interno no servidor",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "error": {
                                        "type": "string",
                                        "example": "Erro ao processar o upload do documento"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "security": [
                {
                    "bearerAuth": []
                }
            ]
        }
    }
};