package org.zerock.mallapi.service;

import org.zerock.mallapi.domain.Todo;
import org.zerock.mallapi.dto.PageRequestDTO;
import org.zerock.mallapi.dto.PageResponseDTO;
import org.zerock.mallapi.dto.TodoDTO;

public interface TodoService {
	TodoDTO get(Long tno);
	
	Long register(TodoDTO dto);
	
	void modify(TodoDTO dto);
	
	void remove(Long tno);
	
	PageResponseDTO<TodoDTO> getList(PageRequestDTO pageRequestDTO);
	
	//자바 8버전 이후 default를 추가해서 기능이나 메서드를 선언한다.
	default TodoDTO entityToDTO(Todo todo) {
		return TodoDTO.builder()
				.tno(todo.getTno())
				.writer(todo.getWriter())
				.title(todo.getTitle())
				.content(todo.getContent())
				.complete(todo.isComplete())
				.dueDate(todo.getDueDate())
				.build();
	}
	
	default Todo dtoToEntity(TodoDTO todoDTO) {
		return Todo.builder()
				.tno(todoDTO.getTno())
				.writer(todoDTO.getWriter())
				.title(todoDTO.getTitle())
				.content(todoDTO.getContent())
				.complete(todoDTO.isComplete())
				.dueDate(todoDTO.getDueDate())
				.build();
	}
}
