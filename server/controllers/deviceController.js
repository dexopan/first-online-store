import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import * as path from 'path';
import { dirname } from 'path';
import { Device, DeviceInfo, Basket, BasketDevice } from '../models/models.js'
import ApiError from '../error/ApiError.js'

class DeviceController {
	async create(req, res, next) {
		try {
			const { name, price, brandId, typeId, info } = req.body
			const { img } = req.files
			let fileName = uuidv4() + ".jpg"
			const __filename = fileURLToPath(import.meta.url);
			const __dirname = dirname(__filename);
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			const device = await Device.create({ name, price, brandId, typeId, img: fileName })

			if (info) {
				const parseInfo = JSON.parse(info)
				parseInfo.forEach(i =>
					DeviceInfo.create({
						title: i.title,
						description: i.description,
						deviceId: device.id
					})
				)
			}

			return res.json(device)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}

	}
	async getAll(req, res, next) {
		try {
			let { brandId, typeId, limit, page } = req.query
			page = page || 1
			limit = limit || 9
			let offset = page * limit - limit
			let devices;
			if (!brandId && !typeId) {
				devices = await Device.findAndCountAll({ limit, offset })
			}
			if (brandId && !typeId) {
				devices = await Device.findAndCountAll({ where: { brandId }, limit, offset })
			}
			if (!brandId && typeId) {
				devices = await Device.findAndCountAll({ where: { typeId }, limit, offset })
			}
			if (brandId && typeId) {
				devices = await Device.findAndCountAll({ where: { typeId, brandId }, limit, offset })
			}
			return res.json(devices)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async getOne(req, res, next) {

		try {
			const { id } = req.params
			const device = await Device.findOne(
				{
					where: { id },
					include: [{ model: DeviceInfo, as: 'info' }]
				},
			)
			return res.json(device)
		} catch (error) {
			next(ApiError.badRequest(error.message))
		}
	}

	async createBasketDevice(req, res, next) {
		const { id, userId } = req.body;
		const userBasket = await Basket.findOne({ where: { userId } });
		console.log(userBasket)
		const deviceBasket = await BasketDevice.create({ deviceId: id, basketId: userBasket.id });
		console.log(deviceBasket)
		return res.json(deviceBasket);
	}

}

export default new DeviceController()