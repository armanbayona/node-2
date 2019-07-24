module.exports = {

	read: function(req, res) {
		res.status(200).json(req.app.get('db').posts)
	},

	create: function(req, res) {
		const { userId, content } = req.body;
		const db = req.app.get('db')

		db.posts.data.push({ userId, content })
		db.posts.id++

		res.status(201).json(db)
	}
};