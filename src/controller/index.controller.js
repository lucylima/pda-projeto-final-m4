const showEveryRoute = async (req, res) => {
  try {
    const result = `\nRotas disponíveis:
    
    Admin: {
      /admin' [GET]
      /admin/:cpf [GET]
      /admin/token/:access/:cpf [GET] (acess = 1234)
      /admin/register [POST]
      /admin/edit/:token [PUT]
      /admin/delete/:cpf/:token [DELETE]
    }

    Class: {
      /class [GET]
      /class/:id [GET]
      /class/register [POST]
      /class/edit/:id [PUT]
      /class/delete/:id [DELETE]
    }

    Company: {
      /company [GET]
      /company/:cnpj [GET]
      /company/register [POST]
      /company/edit/:id [PUT]
      /company/delete/:cnpj [DELETE]
    }

    Job: {
      /job' [GET]
      /job/register [POST]
      /job/edit/:id [PUT]
      /job/delete/:id [DELETE]
    }

    Teacher: {
      /teacher [GET]
      /teacher/register [POST]
      /teacher//update/:id [PUT]
      /teacher/delete/:id [DELETE]
    }

    Student: {
      /student [GET]
      /student/register [POST]
      /student/update/:cpf/:token/:studentId [PUT]
      /student/delete/:cpf/:token/:studentId'[DELETE]
    }

    Questionary: {
      /questionary [GET]
      /questionary/add [POST]
      /questionary/edit/:id [PUT]
      /questionary/delete/:id [DELETE]
    }

    Questions: {
      /questions [GET]
      /questions/add [POST]
      /questions/edit/:id [PUT]
      /questions/delete/:id [DELETE]
    }
  `
    return res.status(200).send(result)
  } catch (error) {
    return res.status(400).json(error)
  }
}

export { showEveryRoute }