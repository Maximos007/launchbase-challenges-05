const { age, graduation, date } = require('../../lib/utils');

module.exports = {

	index(req, res) {

		return res.render('teachers/index');
	},

	create(req, res) {
		return res.render('teachers/create');
	},
  
	post(req, res) {
		const keys = Object.keys(req.body);

		for (key of keys) {
			
			if(req.body[key] == '')
      
				return res.send('Please, fill all fields!');
		}
    
		// const query = `
		// 	INSERT INTO teachers (
		// 		name,
		// 		avatar_url,
		// 		birth,
		// 		education,
		// 		class_type,
		// 		services,
		// 		created_at
		// 	) VALUES ($1, $2, $3, $4, $5, $6, $7)
		// 	RETURNING id 
		// `;

		// const values = [
		// 	req.body.name,
		// 	req.body.avatar_url,
		// 	date(req.body.birth).iso,
		// 	req.body.education,
		// 	req.body.class_type,
		// 	req.body.services,
		// 	date(Date.now()).iso,
		// ];
		let { avatar_url, name, birth, education, class_type, services } = req.body;

		// birth = Date.parse(birth);
		// const created_at = Date.now();
		// let id = 1;
		// const lastTeacher = data.teachers[data.teachers.length - 1];
		// if (lastTeacher) {
		// 	id = lastTeacher.id + 1;
		// }

		// data.teachers.push({
		// 	id,
		// 	avatar_url,
		// 	name,
		// 	birth,
		// 	education,
		// 	class_type,
		// 	services,
		// 	created_at,
		// });

		// fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
		// 	if (err) return res.send('Write file error!');

		// 	return res.send('was successfully created');
		// });

		return;
	},

	show(req, res) {

		return;
		// const { id } = req.params;

		// const foundTeacher = data.teachers.find(teacher => {
		// 	return teacher.id == id;
		// });

		// if(!foundTeacher) return res.send('Teacher not found!');

		// const teachers = {
		// 	...foundTeacher,
		// 	services: foundTeacher.services.split(','),
		// 	age: age(foundTeacher.birth),
		// 	created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
		// 	education: graduation(foundTeacher.education),
		// };

		// return res.render('teachers/show', { teachers });
	},

	edit(req, res) {

		return;

		// const { id } = req.params;

		// const foundTeacher = data.teachers.find(teacher => {
		// 	return teacher.id == id;
		// });

		// if(!foundTeacher) return res.send('Teacher not found!');

		// const teachers = {
		// 	...foundTeacher,
		// 	birth: date(foundTeacher.birth).iso
		// };

		// return res.render('teachers/edit', { teachers });
	},

	put(req, res) {
		const keys = Object.keys(req.body);

		for (key of keys) {
			
			if(req.body[key] == '')
      
				return res.send('Please, fill all fields!');
		}
		let { avatar_url, name, birth, education, class_type, services } = req.body;
		
		return;
		// const { id } = req.body;
		// let index = 0;

		// const foundTeacher = data.teachers.find((teacher, foundIndex) => {
		// 	if(teacher.id == id) {
		// 		index = foundIndex;

		// 		return true;
		// 	}
		// });

		// if(!foundTeacher) return res.send('Teacher not found!');

		// const teachers = { 
		// 	...foundTeacher,
		// 	...req.body,
		// 	birth: Date.parse(req.body.birth),
		// 	id:  Number(req.body.id)
		// };

		// data.teachers[index] = teachers;

		// fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
		// 	if(err) return res.send('Write error!');

		// 	// return res.redirect(`/teachers/${id}`);
		// 	return res.send('Success!');
		// });
	},

	delete(req, res) {

		return;
		// 	const { id } = req.body;

		// 	const filteredTeachers = data.teachers.filter((teachers) => {
		// 		return teachers.id != id;
		// 	});

		// 	data.teachers = filteredTeachers;

		// 	fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
		// 		if (err) return res.send('Write error!');

	// 		return res.send('successfully deleted');
	// 	});
	}
};