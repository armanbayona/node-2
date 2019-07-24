module.exports = {

	read: function(req, res) {
		res.status(200).json(req.app.get('db').comments)
	},

	create: function(req, res) {
		const { userId, postId, comment } = req.body;
		const db = req.app.get('db')

		db.users.data.push({ userId, postId, comment })
		db.users.id++

		res.status(201).json(db)
	}
};