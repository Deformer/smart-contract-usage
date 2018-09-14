import { getCarsContract } from "../../services/car";


export const create = ({ body: { number, description } }, res, next) => {
  const cars = getCarsContract();
  cars.setCar(number, description, (err, transaction) => {
    if (err) {
      return next(err);
    }
    res.status(201).send({ transaction });
  });
};

export const amount = (req, res, next) => {
  const cars = getCarsContract();
  cars.getCarsAmount((err, carsAmount) => {
      if (err) {
        return next(err);
      }
      res.status(200).send({ carsAmount });
  });
};

