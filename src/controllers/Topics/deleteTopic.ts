import * as Interfaces from "../../interfaces/index";
import * as Utils from "../../utils/index";
import * as Error from "../../globals/errors/index";

const deleteTopic: Interfaces.Controllers.Async = async (req, res, next) => {
  try {
    const topicId: string = req.query.id as string;
    if (!topicId) {
      return res.json(Error.invalidDetails);
    }
    const deletedTopic = await Utils.prisma.topic.delete({
      where: {
        id: topicId,
      },
    });

    return res.json(
      Utils.Response.success({
        msg: deletedTopic,
      })
    );
  } catch (err) {
    return next(err);
  }
};

export default deleteTopic;
