const express = require('express')
const Todo = require('../models').Todo

// const findAll = (req, res) => {
//   return res.json(
//     [
//       {
//         "id": 1,
//         "title": "Desenvolver um Web-app capaz de criar, editar, remover e ordenar os itens de um Todo-list.",
//         "status": "closed",
//         "description": "Configurações: Os campos para filtro/busca são: Título do item, Status (itens aberto, concluída), Prioridade (Baixa, Média e Alta)",
//         "priority": "low"
//       },
//       {
//         "id": 2,
//         "title": "O Web-App deverá ser capaz de salvar os dados, (pode ser desde localStorage até o Firebase).",
//         "status": "opened",
//         "description": "Adicionar o botão de remoção",
//         "priority": "normal"
//       },
//       {
//         "id": 3,
//         "title": "Desenvolver uma API para consumir e servir estes dados.",
//         "status": "opened",
//         "description": "Desenvolver todo o app em Vue.",
//         "priority": "high"
//       }
//     ]
//   )
// }

const findAll = async (req, res) => {
  const { title, status, priority } = req.query

  try {
    const todos = await Todo.findAll({
      where: {
        ...(!!title && { title: { $like: `%${title}%` } }),
        ...((!!status && status !== 'all') && { status }),
        ...((!!priority && priority !== 'all') && { priority }),
      }
    })

    res.status(200).json(todos)
  } catch(error) {
    console.log('Error :', error)
    res.status(500)
  }
}

const create = async (req, res) => {
  const { body } = req

  try {
    const todo = await Todo.create(body)

    res.status(201).json(todo)
  } catch(error) {
    console.log('Error :', error)
    res.status(500)
  }
}

const update = async (req, res) => {
  const { params, body } = req
  const { id } = params

  try {
    await Todo.update(body, {
      where: { id },
    })

    const todo = await Todo.findOne({
      where: { id }
    })

    res.status(200).json(todo)
  } catch(error) {
    console.log('Error :', error)
    res.status(500)
  }
}

const destroy = async (req, res) => {
  const { id } = req.params

  try {
    const todo = await Todo.destroy({
      where: { id }
    })

    res.status(200).json(todo)
  } catch(error) {
    console.log('Error :', error)
    res.status(500)
  }
}


const router = express.Router()

router.get('/', findAll)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router