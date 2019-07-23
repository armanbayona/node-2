module.exports = {

	read: function(req, res) {
		res.status(200).json(req.app.get('db').users)
	},

	create: function(req, res) {
		const { id, email, password } = req.body;
		const db = req.app.get('db')

		db.users.data.push({ id, email, password })
		db.profiles.data.push({  userID: id, thumbnail: "", about: "" })

		db.users.id++
		db.profiles.id++

		res.status(201).json(db)
	}
};