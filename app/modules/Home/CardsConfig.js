const rules = `Bạn chỉ cần thực hiện lần lượt để lấy một thẻ. Nữ đầu tiên hoặc người đầu tiên giành chiến thắng ở trò oẳn tù tì. Mỗi thẻ tương ứng với một hành động khác nhau.
Bạn có thể mất bao lâu tùy thích để lấy thẻ của mình, nhưng thẻ phải được rút khi hết giờ.
Không chạm vào khi trò chơi không cho phép, bạn không được phép chạm vào người khác trừ khi thẻ ghi như vậy. Bạn không được phép quan hệ tình dục cho đến khi kết thúc trò chơi.
Cả hai bạn phải bắt đầu với sáu trang phục mỗi người. Tất được tính là một. Mũ và nón không được tính.
Nếu hành động bị hạn chế bởi quần áo, hãy rút bài lần nữa, bạn không được phép cởi bỏ quần áo trừ khi lá bài nói như vậy.
Hãy cùng nhau tận hưởng phút giây vui vẻ`

const allCards = {
  'Ace of Herts':
    'Thủ dâm cho bạn tình của bạn cho đến khi lá bài tiếp theo được rút ra. Bạn không được phép đạt cực khoái',
  'King of Hearts': 'Cởi bỏ một món quần áo khỏi người bạn đời của bạn theo một cách khác thường',
  'Queen of Hearts': 'Giao lưu với đối tác của bạn trong năm phút mà không cần chạm vào',
  'Jack of Hearts':
    'Bạn phải liếm đối tác của mình trên da của họ, đối tác của bạn quyết định vị trí',
  'Ten of Hearts':
    'Chạm vào đối tác của bạn trên khắp cơ thể của họ trong năm phút. Bạn không được phép hôn nhau',
  'Nine of Hearts':
    'Đặt một khối đá vào miệng, hôn nhau và đưa nó vào giữa hai bạn. (Nếu bạn không có khối đá, hãy rút một thẻ mới)',
  'Eight of Hearts':
    'Hỏi đối tác của bạn sự thật hoặc dám. Nếu dám được chọn, hành động chỉ có thể kéo dài tối đa mười phút',
  'Seven of Hearts':
    'Hôn người bạn đời của bạn say đắm vào cổ cho đến khi lá bài tiếp theo được rút ra. Không chạm vào và không đưa miệng vào miệng',
  'Six of Hearts':
    'Nghiền mình trước đối tác của bạn và cố gắng trong mười phút. Bạn có thể chạm vào nhau',
  'Five of Hearts':
    'Cho đối tác của bạn mát-xa bằng dầu trong mười phút. Bạn không được phép chạm vào nhau',
  'Four of Hearts':
    'Giúp đối tác của bạn một chút trong mười phút. Sử dụng chất bôi trơn hoặc dầu',
  'Three of Hearts': 'Cho bạn tình của bạn quan hệ tình dục bằng miệng trong năm phút',
  'Two of Hearts': 'Cởi bỏ một món quần áo khỏi người bạn đời của bạn chỉ bằng răng của bạn',
  'Ace of Spades':
    'Để đối tác của bạn cởi bỏ tất cả quần áo của bạn trong khi hôn và chạm vào. (Bỏ thẻ sau đó)',
  'King of Spades': 'Loại bỏ một mục quần áo. Đối tác của bạn quyết định cái nào',
  'Queen of Spades': 'Đánh đối tác của bạn ba lần',
  'Jack of Spades': 'Bịt mắt đối tác của bạn và làm những gì bạn muốn với họ trong mười phút',
  'Ten of Spades':
    'Có một cuộc thi nhìn chằm chằm, người đầu tiên cười sẽ loại bỏ một món đồ quần áo',
  'Nine of Spades':
    'Ôm đối tác của bạn từ phía sau, chạm vào đối tác của bạn trên khắp cơ thể của họ cho đến khi một lá bài mới được rút ra. Sử dụng lưỡi và miệng của bạn để làm cho nó gợi cảm hơn',
  'Eight of Spades': 'Chọn một hành động trong số mọi hành động và chuẩn bị cho nó',
  'Seven of Spades':
    'Vuốt nhẹ vào đối tác của bạn trong ba phút. Đối tác không được phép chống lại',
  'Six of Spades': 'Bôi trơn hoặc bôi dầu lên toàn bộ cơ thể đối tác của bạn',
  'Five of Spades':
    'Nếu bây giờ cả hai bạn hoàn toàn khỏa thân, bạn phải đi vào phòng tắm và chơi với nhau vào cuối trò chơi. Nếu không rút lại và loại bỏ thẻ này',
  'Four of Spades':
    'Thực sự gần gũi với đối tác của bạn và thì thầm vào tai đối tác của bạn những gì bạn muốn làm với họ theo cách rất gợi cảm',
  'Three of Spades':
    'Lấy một khối băng và chạm vào đối tác của bạn với nó ở bất cứ đâu bạn muốn. (Nếu bạn không có khối đá, hãy rút một thẻ mới)',
  'Two of Spades': 'Loại bỏ một mục quần áo',
  'Ace of Diamonds': 'Hãy để đối tác của bạn thực hiện một cuộc ân ái trong mười phút',
  'King of Diamonds':
    'Lưu thẻ này. Khi lá bài này được rút ra có nghĩa là bạn sẽ kiểm soát được tình hình khi trò chơi kết thúc. Bạn có thể chọn kết thúc trò chơi khi bạn muốn hoặc tiếp tục chơi cho đến lá bài cuối cùng',
  'Queen of Diamonds': 'Chơi với đối tác của bạn bằng lưỡi bằng miệng của bạn trong ba phút',
  'Jack of Diamonds': 'Ngón tay đối tác của bạn cho đến khi lá bài tiếp theo được rút ra',
  'Ten of Diamonds': 'Cho đối tác của bạn mát-xa mông trong năm phút',
  'Nine of Diamonds': 'Hãy ôm chặt bạn đời của bạn',
  'Eight of Diamonds': 'Hãy thì thầm vào tai đối tác của bạn lý do tại sao bạn nghĩ họ đẹp',
  'Seven of Diamonds': 'Chơi oẳn tù tì, người thua sẽ loại bỏ một món đồ là quần áo',
  'Six of Diamonds':
    'Hãy để đối tác trêu chọc bạn trong mười phút. Bạn không được phép làm bất cứ điều gì',
  'Five of Diamonds': 'Buộc tay đối tác của bạn và làm những gì bạn muốn với họ trong mười phút',
  'Four of Diamonds':
    'Hãy để đối tác của bạn chụp một bức ảnh gợi cảm về bạn. Đối tác của bạn quyết định bạn nên tạo dáng như thế nào',
  'Three of Diamonds': 'Hôn bạn đời của bạn ở nơi nào đó mà bạn chưa từng hôn họ trước đây',
  'Two of Diamonds': 'Loại bỏ một món quần áo khỏi người bạn đời của bạn chỉ bằng một ngón tay',
  'Ace of Clubs': 'Làm ơn cho nhau ở vị trí 69 trong mười phút. Người nhặt thẻ tha ở trên cùng',
  'King of Clubs': 'Cho đối tác của bạn xoa chân trong mười phút',
  'Queen of Clubs':
    'Bôi trơn / bôi dầu lên toàn bộ cơ thể của bạn trong khi đối tác của bạn đang quan sát',
  'Jack of Clubs': 'Cố gắng làm cho đối tác của bạn đạt cực khoái trong vòng chưa đầy ba phút',
  'Ten of Clubs':
    'Đánh và xoa bóp đùi đối tác của bạn cho đến khi một thẻ mới được rút ra. Bạn không được phép chạm vào bộ phận sinh dục của họ',
  'Nine of Clubs': 'Cởi bỏ tất cả quần áo ngoại trừ đồ lót của bạn. (Bỏ thẻ sau đó)',
  'Eight of Clubs':
    'Hôn đối tác của bạn ở bất kỳ đâu trên miệng cho đến khi lá bài tiếp theo được rút ra',
  'Seven of Clubs': 'Cởi bỏ một món quần áo trong khi bạn đang tập luyện',
  'Six of Clubs': 'Thay quần áo với nhau',
  'Five of Clubs':
    'Dám đối tác của bạn làm điều gì đó. Nếu đối tác của bạn từ chối, bạn có thể chọn một hành động trong số mọi hành vi và nhờ họ / bạn soạn thảo trước',
  'Four of Clubs':
    'Mát xa cho đối tác của bạn trong mười phút bằng cách sử dụng cơ thể của bạn nhưng không sử dụng tay',
  'Three of Clubs':
    'Thay phiên nhau nói với đối tác của bạn những gì bạn nghĩ là thuộc tính quyến rũ nhất của họ',
  'Two of Clubs':
    'Nói với đối tác của bạn những gì bạn thích nhất trên cơ thể của bạn và để họ cho bạn biết họ thích điều gì nhất trên cơ thể của họ',
}

export default {
  rules,
  allCards
}