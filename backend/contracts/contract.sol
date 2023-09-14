// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
pragma abicoder v2;


/// @title This contract create user posts
/// @author demictivias
/// @notice You can create your post! 
contract MyContract {

    address owner;

    struct Post {
        string  lable;      // Название
        string  message;    // Содержание статьи
        address author;     // Автор
        uint256 datatime;   // Дата создание поста
        uint    id;         // id  для массива
    }

    struct User {
        string  name;
        address who;
        bool    reg;
    }

    /// @dev todo: Дядя сможешь сделать просмотр постов только конкретного пользователя на фронте? 
    Post[]  public UserPosts;
    mapping (address => User) users;

    constructor() {
        /// @dev add 1 post with test
        // users[0x5B6857Ce71450898FD2f3b7a9577265245E9BED5] = User("name", 0x5B6857Ce71450898FD2f3b7a9577265245E9BED5, true);
        // address d = 0x96bF842B5C28b6c6786CdbA51a2971625AA9102E;
        UserPosts.push(Post("Blockchain God", "Hi, this my place for you creativity!", msg.sender, block.timestamp, UserPosts.length));
        // UserPosts.push(Post("Matvey", "e", UserPosts.length));
        // UserPosts.push(Post("Matvey", "f", UserPosts.length));
    }

    // modifier onlyOwner() {
    //     require(msg.sender == owner, "Not owner!");
    //     _;
    // }

    function registration(string memory _name) public returns(User memory) {
        require(users[msg.sender].reg != true, "you are reg!!!!");
        users[msg.sender] = User(_name, msg.sender, true);
        return users[msg.sender];
    }

    function authorization(string calldata _name) public view returns(User memory) {
        // require(users[msg.sender].who != msg.sender,"not your address!");
        require(users[msg.sender].reg == true,     "you are not reg!");
        require(keccak256(bytes(users[msg.sender].name)) == keccak256(bytes(_name)), "invalid data!");
        return users[msg.sender];
        
    }

    function createNewPost(string calldata _lable, string calldata _message) public  {
        // require(abi.encodePacked(_message) != 0, "Invalid message");
        require(users[msg.sender].reg == true, "You not reg!");
        UserPosts.push(Post(_lable, _message, msg.sender, block.timestamp, UserPosts.length));
        // return UserPosts[UserPosts.length];
    }

    function changePostData(uint index, string calldata _lable, string calldata _message) public  returns(Post memory) {
        require(UserPosts[index].author == msg.sender, "not your post!");
        UserPosts[index].lable = _lable;
        UserPosts[index].message = _message;
        return UserPosts[index];
    }

    function removePost(uint index) public {
        require(UserPosts[index].author == msg.sender, "not your post!");
        UserPosts[index] = UserPosts[UserPosts.length - 1];
        UserPosts.pop();
    }

    /// @dev For interface on frontend 
    function viewUserPost(uint index) public view returns(Post memory) {
        return UserPosts[index];
    }
    
    function veiwAllPosts() public view returns(Post[] memory) {
        Post[] memory result = new Post[](UserPosts.length); 
        for (uint i = 0; i < UserPosts.length; i++) {
            
            result[i] = UserPosts[i];
            
        }
      
        return result;
    }

    function getDataTime(uint index) public view returns(uint) {
        return UserPosts[index].datatime;
    }

}






    